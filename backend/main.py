import os
from typing import List, Optional, Tuple

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="Before Breach API")


def get_allowed_origins() -> List[str]:
    """Resolve CORS origins from env for frontend/backend decoupling."""
    raw_origins = os.getenv("BACKEND_ALLOWED_ORIGINS", "")
    if raw_origins:
        return [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
    return [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

ALLOWED_ORIGINS = get_allowed_origins()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


class AnalyzeSecurityRequest(BaseModel):
    text: str = Field(..., min_length=1, description="Security context to analyze.")
    system_type: Optional[str] = Field(
        None, description="Optional system classification (e.g., finance, healthcare)."
    )


class AnalyzeSecurityResponse(BaseModel):
    risk_level: str
    explanation: str
    recommended_actions: List[str]


class SecurityAnalysisEngine:
    """Rule-based analysis engine placeholder for future ML/LLM models."""

    KEYWORD_RULES = [
        {
            "label": "ransomware activity",
            "keywords": ["ransomware", "encrypt files", "encryption demand"],
            "score": 3,
        },
        {
            "label": "data exfiltration",
            "keywords": ["exfiltration", "data leak", "data breach", "stolen data"],
            "score": 3,
        },
        {
            "label": "credential abuse",
            "keywords": ["credential stuffing", "password spray", "phishing"],
            "score": 2,
        },
        {
            "label": "privilege escalation",
            "keywords": ["privilege escalation", "admin compromise", "root access"],
            "score": 2,
        },
        {
            "label": "lateral movement",
            "keywords": ["lateral movement", "east-west", "pivoting"],
            "score": 2,
        },
        {
            "label": "zero-day exposure",
            "keywords": ["zero day", "0-day", "unpatched exploit"],
            "score": 3,
        },
    ]

    SYSTEM_TYPE_WEIGHTS = {
        "finance": 1,
        "healthcare": 1,
        "critical infrastructure": 2,
        "industrial": 2,
        "government": 2,
    }

    RECOMMENDED_ACTIONS = {
        "Low": [
            "Continue monitoring with standard alert thresholds.",
            "Validate baseline controls and update documentation.",
        ],
        "Medium": [
            "Increase monitoring cadence and validate critical controls.",
            "Initiate targeted threat hunting for relevant indicators.",
            "Review incident response readiness with key stakeholders.",
        ],
        "High": [
            "Escalate to incident response and activate containment procedures.",
            "Isolate affected assets and preserve forensic evidence.",
            "Notify executive stakeholders and review regulatory obligations.",
        ],
    }

    def analyze(self, text: str, system_type: Optional[str]) -> Tuple[str, str, List[str]]:
        normalized = text.lower()
        score = 0
        indicators = []

        for rule in self.KEYWORD_RULES:
            if any(keyword in normalized for keyword in rule["keywords"]):
                indicators.append(rule["label"])
                score += rule["score"]

        system_note = ""
        if system_type:
            system_key = system_type.strip().lower()
            score += self.SYSTEM_TYPE_WEIGHTS.get(system_key, 0)
            if system_key in self.SYSTEM_TYPE_WEIGHTS:
                system_note = (
                    f" System type '{system_type}' increases sensitivity."
                )

        if score >= 5:
            risk_level = "High"
        elif score >= 3:
            risk_level = "Medium"
        else:
            risk_level = "Low"

        if indicators:
            indicator_text = ", ".join(sorted(set(indicators)))
            explanation = (
                f"Detected indicators: {indicator_text}.{system_note}"
                " Rule-based scoring was applied."
            )
        else:
            explanation = (
                "No high-risk indicators detected in the provided text."
                f"{system_note} Rule-based scoring was applied."
            )

        return risk_level, explanation.strip(), self.RECOMMENDED_ACTIONS[risk_level]


analysis_engine = SecurityAnalysisEngine()


@app.post("/analyze-security", response_model=AnalyzeSecurityResponse)
def analyze_security(payload: AnalyzeSecurityRequest):
    risk_level, explanation, recommended_actions = analysis_engine.analyze(
        payload.text, payload.system_type
    )
    return AnalyzeSecurityResponse(
        risk_level=risk_level,
        explanation=explanation,
        recommended_actions=recommended_actions,
    )

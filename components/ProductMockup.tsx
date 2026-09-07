import { ArrowRight, Check, CircleCheck, Sparkles } from "lucide-react";

export function ProductMockup() {
  return (
    <div className="product-window" aria-label="NOVA product dashboard preview">
      <div className="window-top">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>NOVA / Orbit launch</span>
        <div className="window-status">
          <CircleCheck size={14} /> On track
        </div>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-side">
          <div className="mini-logo">N</div>
          <span className="side-active">▦</span>
          <span>◫</span>
          <span>♧</span>
          <span>◌</span>
          <div className="side-spacer" />
          <span>⚙</span>
        </aside>
        <div className="dashboard-main">
          <div className="dash-heading">
            <div>
              <small>PROJECT / Q3</small>
              <h3>Orbit launch</h3>
            </div>
            <div className="avatar-stack">
              <b>MC</b>
              <b>JE</b>
              <b>+4</b>
            </div>
          </div>
          <div className="dash-tabs">
            <span className="selected">Overview</span>
            <span>Tasks</span>
            <span>Timeline</span>
            <span>Notes</span>
          </div>
          <div className="dash-grid">
            <div className="progress-card">
              <small>PROJECT HEALTH</small>
              <div className="health-row">
                <strong>82%</strong>
                <span>+12.4%</span>
              </div>
              <div className="progress">
                <i />
              </div>
              <div className="chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-label">
                <Sparkles size={14} /> NOVA AI
              </div>
              <p>
                “Your team is ahead of schedule. I found 3 tasks ready to
                unblock.”
              </p>
              <button>
                Review insights <ArrowRight size={14} />
              </button>
            </div>
          </div>
          <div className="task-card">
            <div className="task-head">
              <span>Today&apos;s focus</span>
              <small>4 of 7 complete</small>
            </div>
            {[
              "Finalize launch narrative",
              "Review onboarding flow",
              "Send partner update",
            ].map((t, i) => (
              <div className="task-row" key={t}>
                <span className={`task-check ${i < 2 ? "done" : ""}`}>
                  {i < 2 && <Check size={11} />}
                </span>
                <span>{t}</span>
                <small>{i === 0 ? "10:00" : i === 1 ? "13:30" : "16:00"}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
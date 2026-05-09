export default function Envelope({ opened, sealPopped, onSealClick }) {
  return (
    <div className="envelope-wrapper">
      <div className="envelope-container">
        <div className={`env-flap${opened ? ' open' : ''}`} />

        {!sealPopped && (
          <div
            className={`seal${sealPopped ? ' popped' : ''}`}
            onClick={onSealClick}
          >
            M
          </div>
        )}

        <div className="env-left" />
        <div className="env-right" />

        <div className="env-body" />
      </div>
    </div>
  )
}
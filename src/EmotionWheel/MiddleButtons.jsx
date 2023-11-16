import React, { useState } from 'react';

const InnerEmotions = {
  Scared: {
    count: 2,
    color: '#12bcca',
  },
  Anxious: {
    count: 2,
    color: '#12bcca',
  },
  Insecure: {
    count: 2,
    color: '#12bcca',
  },
  Weak: {
    count: 2,
    color: '#12bcca',
  },
  Rejected: {
    count: 2,
    color: '#12bcca',
  },
  Threatend: {
    count: 2,
    color: '#12bcca',
  },
  Let_Down: {
    count: 2,
    color: '#8c8cc4',
  },
  Humiliated: {
    count: 2,
    color: '#8c8cc4',
  },
  Bitter: {
    count: 2,
    color: '#8c8cc4',
  },
  Mad: {
    count: 2,
    color: '#8c8cc4',
  },
  Aggressive: {
    count: 2,
    color: '#8c8cc4',
  },
  Frustrated: {
    count: 2,
    color: '#8c8cc4',
  },
  Distant: {
    count: 2,
    color: '#8c8cc4',
  },
  Critical: {
    count: 2,
    color: '#8c8cc4',
  },
  Disaproved: {
    count: 2,
    color: '#b58dc0',
  },
  Disapointed: {
    count: 2,
    color: '#b58dc0',
  },
  Awful: {
    count: 2,
    color: '#b58dc0',
  },
  Repelled: {
    count: 2,
    color: '#b58dc0',
  },
  Hurt: {
    count: 2,
    color: '#e297a5',
  },
  Despressed: {
    count: 2,
    color: '#e297a5',
  },
  Guilty: {
    count: 2,
    color: '#e297a5',
  },
  Despair: {
    count: 2,
    color: '#e297a5',
  },
  Vulnerable: {
    count: 2,
    color: '#e297a5',
  },
  Lonely: {
    count: 2,
    color: '#e297a5',
  },
  Optimistic: {
    count: 2,
    color: '#ef9783',
  },
  Trusting: {
    count: 2,
    color: '#ef9783',
  },
  Peaceful: {
    count: 2,
    color: '#ef9783',
  },
  Powerful: {
    count: 2,
    color: '#ef9783',
  },
  Accepted: {
    count: 2,
    color: '#ef9783',
  },
  Proud: {
    count: 2,
    color: '#ef9783',
  },
  Interested: {
    count: 2,
    color: '#ef9783',
  },
  Content: {
    count: 2,
    color: '#ef9783',
  },
  Playful: {
    count: 2,
    color: '#ef9783',
  },
  Excited: {
    count: 2,
    color: '#ECB45D',
  },
  Amazed: {
    count: 2,
    color: '#ECB45D',
  },
  Confused: {
    count: 2,
    color: '#ECB45D',
  },
  Startled: {
    count: 2,
    color: '#ECB45D',
  },
  Tired: {
    count: 2,
    color: '#5cc2af',
  },
  Stressed: {
    count: 2,
    color: '#5cc2af',
  },
  Busy: {
    count: 2,
    color: '#5cc2af',
  },
  Bored: {
    count: 2,
    color: '#5cc2af',
  },
};

const InnerButtons = () => {
  const size = 3000;
  const radius = size / 4;
  const center = size / 2;
  const stroke = 0.1;
  const textOffset = 75;
  const viewBox = `0 0 ${size} ${size}`;

  const total = Object.values(InnerEmotions).reduce((acc, { count }) => acc + count, 0);

  const angles = {};
  Object.entries(InnerEmotions).forEach(([emotion, value]) => {
    angles[emotion] = (value.count / total) * 360;
  });

  const [hoveredSlice, setHoveredSlice] = useState(null);

  const handleHover = (emotion) => {
    setHoveredSlice(emotion);
  };
  const handleClick = (emotion) => {
    console.log(emotion);
  };

  let startAngle = 0;

  return (
    <div
      style={{
        textAlign: 'center',
        height: size,
        width: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: `calc(50% - ${size / 2}px)`,
        top: `calc(50% - ${size / 2}px)`,
        zIndex: '100',
        pointerEvents: 'none',
      }}>
      <svg viewBox={viewBox} id="inner" style={{ display: 'inline-block', pointerEvents: 'none' }} className="pie">
        {Object.entries(angles).map(([emotion, angle]) => {
          const pathData = describeArc(center, center, radius, startAngle, startAngle + angle);
          let rotationAngle = (startAngle + startAngle + angle) / 2;
          let offset = rotationAngle > 180 ? -textOffset : textOffset;
          rotationAngle = rotationAngle > 180 ? rotationAngle + 90 : rotationAngle - 90;

          startAngle += angle;

          return (
            <g key={emotion}>
              <path
                d={pathData.pathData}
                fill={InnerEmotions[emotion].color}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth={(size * stroke) / 100}
                onMouseEnter={() => handleHover(emotion)}
                onMouseLeave={() => setHoveredSlice(null)}
                onClick={() => handleClick(emotion)}
                style={{
                  transformOrigin: `${size / 2}px ${size / 2}px`,
                  transform: hoveredSlice === emotion ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.1s ease-in-out',
                  pointerEvents: 'auto',
                }}>
                <title>{emotion}</title>
              </path>
              <text
                x={pathData.center.x + offset}
                y={pathData.center.y}
                transform={`rotate(${rotationAngle} ${pathData.center.x} ${pathData.center.y})`} // Apply rotation here
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: 42,
                  fontWeight: 'bold',
                  fill: hoveredSlice === emotion ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  transition: 'transform 0.2s ease-in',
                }}>
                {emotion}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var pathData = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, 'L', x, y, 'Z'].join(' ');

  var centerX = (start.x + end.x + x) / 3;
  var centerY = (start.y + end.y + y) / 3;

  return { pathData, center: { x: centerX, y: centerY }, rotationOffset: 25 };
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export default InnerButtons;

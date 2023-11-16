import React, { useState } from 'react';

const InnerEmotions = {
  Fearful: {
    count: 6,
    color: '#00a3b9',
  },
  Angry: {
    count: 8,
    color: '#7572b4',
  },
  Disgusted: {
    count: 4,
    color: '#ab7bb5',
  },
  Sad: {
    count: 6,
    color: '#ce7c87',
  },
  Happy: {
    count: 9,
    color: '#e1876e',
  },
  Surprised: {
    count: 4,
    color: '#e5a44b',
  },
  Bad: {
    count: 4,
    color: '#35ba9f',
  },
};

const InnerButtons = () => {
  const size = 1500;
  const radius = size / 4;
  const center = size / 2;
  const stroke = 0.1;
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
        zIndex: '101',
        pointerEvents: 'none',
      }}>
      <svg viewBox={viewBox} id="inner" style={{ display: 'inline-block', pointerEvents: 'none' }} className="pie">
        {Object.entries(angles).map(([emotion, angle]) => {
          const pathData = describeArc(center, center, radius, startAngle, startAngle + angle);
          let rotationAngle = (startAngle + startAngle + angle) / 2;
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
                x={pathData.center.x}
                y={pathData.center.y}
                transform={`rotate(${rotationAngle} ${pathData.center.x} ${pathData.center.y})`} // Apply rotation here
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: 48,
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

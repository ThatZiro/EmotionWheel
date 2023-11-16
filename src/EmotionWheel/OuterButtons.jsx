import React, { useState } from 'react';

const createEmotion = (count, color) => ({
  count,
  color,
});

const commonCount = 1;
const fearfulColor = '#00a3b9';
const angryColor = '#7572b4';
const discustedColor = '#ab7bb5';
const sadColor = '#ce7c87';
const happyColor = '#e1876e';
const suprisedColor = '#e5a44b';
const badColor = '#35ba9f';

const InnerEmotions = {
  // Fearful
  Helpless: createEmotion(commonCount, fearfulColor),
  Frightened: createEmotion(commonCount, fearfulColor),
  Overwhelmed: createEmotion(commonCount, fearfulColor),
  Worried: createEmotion(commonCount, fearfulColor),
  Inadequate: createEmotion(commonCount, fearfulColor),
  Inferior: createEmotion(commonCount, fearfulColor),
  Worthless: createEmotion(commonCount, fearfulColor),
  Insignificant: createEmotion(commonCount, fearfulColor),
  Excluded: createEmotion(commonCount, fearfulColor),
  Persecuted: createEmotion(commonCount, fearfulColor),
  Nervous: createEmotion(commonCount, fearfulColor),
  Exposed: createEmotion(commonCount, fearfulColor),
  // Angry
  Betrayed: createEmotion(commonCount, angryColor),
  Disrespected: createEmotion(commonCount, angryColor),
  Disrespected2: createEmotion(commonCount, angryColor),
  Ridiculed: createEmotion(commonCount, angryColor),
  Indignat: createEmotion(commonCount, angryColor),
  Violated: createEmotion(commonCount, angryColor),
  Furious: createEmotion(commonCount, angryColor),
  Jealous: createEmotion(commonCount, angryColor),
  Provoked: createEmotion(commonCount, angryColor),
  Hostile: createEmotion(commonCount, angryColor),
  Infuriated: createEmotion(commonCount, angryColor),
  Annoyed: createEmotion(commonCount, angryColor),
  Withdrawn: createEmotion(commonCount, angryColor),
  Numb: createEmotion(commonCount, angryColor),
  Sceptical: createEmotion(commonCount, angryColor),
  Dismissive: createEmotion(commonCount, angryColor),
  //Disgusted
  Judgemental: createEmotion(commonCount, discustedColor),
  Embarrased: createEmotion(commonCount, discustedColor),
  Appalled: createEmotion(commonCount, discustedColor),
  Revolted: createEmotion(commonCount, discustedColor),
  Nauseated: createEmotion(commonCount, discustedColor),
  Detestable: createEmotion(commonCount, discustedColor),
  Horrified: createEmotion(commonCount, discustedColor),
  Hesitant: createEmotion(commonCount, discustedColor),
  //Sad
  Embarrased2: createEmotion(commonCount, sadColor),
  Disappointed: createEmotion(commonCount, sadColor),
  Inferior2: createEmotion(commonCount, sadColor),
  Empty: createEmotion(commonCount, sadColor),
  Remorseful: createEmotion(commonCount, sadColor),
  Ashamed: createEmotion(commonCount, sadColor),
  Powerless: createEmotion(commonCount, sadColor),
  Grief: createEmotion(commonCount, sadColor),
  Fragile: createEmotion(commonCount, sadColor),
  Victimized: createEmotion(commonCount, sadColor),
  Abandoned: createEmotion(commonCount, sadColor),
  Isolated: createEmotion(commonCount, sadColor),
  //Happy
  Inspired: createEmotion(commonCount, happyColor),
  Hopeful: createEmotion(commonCount, happyColor),
  Intimate: createEmotion(commonCount, happyColor),
  Sensitive: createEmotion(commonCount, happyColor),
  Thankful: createEmotion(commonCount, happyColor),
  Loving: createEmotion(commonCount, happyColor),
  Creative: createEmotion(commonCount, happyColor),
  Courageous: createEmotion(commonCount, happyColor),
  Valued: createEmotion(commonCount, happyColor),
  Respected: createEmotion(commonCount, happyColor),
  Confident: createEmotion(commonCount, happyColor),
  Successful: createEmotion(commonCount, happyColor),
  Inquisitive: createEmotion(commonCount, happyColor),
  Curious: createEmotion(commonCount, happyColor),
  Joyful: createEmotion(commonCount, happyColor),
  Free: createEmotion(commonCount, happyColor),
  Cheeky: createEmotion(commonCount, happyColor),
  Aroused: createEmotion(commonCount, happyColor),
  // Supprised
  Energetic: createEmotion(commonCount, suprisedColor),
  Eager: createEmotion(commonCount, suprisedColor),
  Awe: createEmotion(commonCount, suprisedColor),
  Astonished: createEmotion(commonCount, suprisedColor),
  Perplexed: createEmotion(commonCount, suprisedColor),
  Disillusioned: createEmotion(commonCount, suprisedColor),
  Dismayed: createEmotion(commonCount, suprisedColor),
  Shocked: createEmotion(commonCount, suprisedColor),

  //Bad
  Unfocused: createEmotion(commonCount, badColor),
  Sleepy: createEmotion(commonCount, badColor),
  Out_Of_Control: createEmotion(commonCount, badColor),
  Overwhelmed2: createEmotion(commonCount, badColor),
  Rushed: createEmotion(commonCount, badColor),
  Pressured: createEmotion(commonCount, badColor),
  Apathetic: createEmotion(commonCount, badColor),
  Indifferent: createEmotion(commonCount, badColor),
};
const OuterButtons = () => {
  const size = 4500;
  const radius = size / 4;
  const center = size / 2;
  const stroke = 0.1;
  const textOffset = 200;
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
        zIndex: '99',
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
                  fontSize: 36,
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

export default OuterButtons;

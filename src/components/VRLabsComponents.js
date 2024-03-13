const GreyItalicText = ({ children }) => (
  <p style={{ color: 'grey', fontStyle: 'italic' }}>{children}</p>
);

const RightAlignedText = ({ children }) => (
  <div style={{ textAlign: 'right' }}>{children}</div>
);
export  { GreyItalicText, RightAlignedText };
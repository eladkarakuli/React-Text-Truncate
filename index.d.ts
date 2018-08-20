import * as React from "react";

export interface TextTruncateProps {
  containerClassName?: string;
  element?: string;
  line?: any;
  onCalculated?: any;
  onTruncated?: any;
  text?: string;
  textElement?: any;
  textTruncateChild?: any;
  truncateText?: any;
  maxCalculateTimes?: number;
}
declare const TextTruncate: React.StatelessComponent<TextTruncateProps>;
export default TextTruncate;

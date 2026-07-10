declare module 'react-vertical-timeline-component' {
  import React from 'react';
  
  export interface VerticalTimelineProps {
    className?: string;
    lineColor?: string;
    animate?: boolean;
    children?: React.ReactNode;
  }
  
  export interface VerticalTimelineElementProps {
    className?: string;
    date?: string;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    iconClassName?: string;
    onTimelineElementClick?: () => void;
    iconOnClick?: () => void;
    style?: React.CSSProperties;
    position?: string;
    visible?: boolean;
    children?: React.ReactNode;
  }
  
  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
} 
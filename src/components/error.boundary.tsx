import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public render() {
    return this.props.children;
  }
}

export default ErrorBoundary;

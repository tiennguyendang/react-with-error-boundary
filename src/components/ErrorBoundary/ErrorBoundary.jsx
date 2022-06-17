import * as React from "react";

import PropTypes from "prop-types";

import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";
import logErrorToExternalService from "@/services/logErrorToExternalService/logErrorToExternalService";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Send report to external service like Sentry or AppSignal,...
    logErrorToExternalService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return <ErrorFallback error={error} />;
    }

    return this.props.children;
  }
}

export function withErrorBoundary(component) {
  const Component = component;
  return class extends ErrorBoundary {
    render() {
      const { hasError, error } = this.state;

      if (hasError) {
        return <ErrorFallback error={error} />;
      }

      return <Component {...this.props} />;
    }
  };
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

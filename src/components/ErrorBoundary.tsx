import { Component, type ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, any> {
  state = { hasError: false, errorMessage: "", errorType: "" };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      errorMessage: error.message,
      errorType: (error as any).cause || "UNKNOWN",
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800 rounded">
          <h2 className="text-xl font-bold mb-2">{this.state.errorType}</h2>
          <p>{this.state.errorMessage}</p>
          <button
            onClick={() =>
              this.setState({
                hasError: false,
                errorMessage: "",
                errorType: "",
              })
            }
            className={`mt-4 px-4 py-2 text-white rounded ${
              this.state.errorType === "RUN_TIME"
                ? "bg-green-400"
                : "bg-red-500"
            }`}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

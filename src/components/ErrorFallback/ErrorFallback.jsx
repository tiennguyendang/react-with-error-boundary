import PropTypes from "prop-types";

/**
 * @typedef {{error: Error}} ErrorFallbackProps
 * @param {ErrorFallbackProps} props
 * @returns {JSX.Element}
 */
export default function ErrorFallback(props) {
  const { error } = props;

  return (
    <div>
      <p>Something went wrong 😭</p>

      {error.message && <span>Here&apos;s the error: {error.message}</span>}
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string,
  }).isRequired,
};

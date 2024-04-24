import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  bgColor: PropTypes.any,
  textcolor: PropTypes.any,
  width: PropTypes.string,
  borderRad: PropTypes.string,
  boxShadow: PropTypes.string,
  padding: PropTypes.string,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.any,
  mb: PropTypes.any,
};

export default function Button({
  children,
  onClick,
  bgColor,
  textcolor,
  width,
  borderRad,
  boxShadow,
  fontWeight,
  padding,
  fontSize,
  mb,
}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      style={{
        backgroundColor: bgColor,
        color: textcolor,
        width: width,
        padding: padding,
        border: "none",
        cursor: "pointer",
        boxShadow: boxShadow,
        borderRadius: borderRad,
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginBottom: mb,
      }}
    >
      {children}
    </button>
  );
}

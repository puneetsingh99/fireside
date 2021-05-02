import "./avatar-styles.css";

export const Avatar = (props) => {
  const { src, size, variant } = props;
  const classes = `avatar-${size} ${variant ? variant : ""}`;
  return <img src={src} alt={"profile avatar"} className={classes} />;
};

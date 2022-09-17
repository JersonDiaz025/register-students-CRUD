
const Title = (props) => {
  return (
    <div>
      <div className={`${props.stylesTitle} ${props.styles}`}>
        {props?.data}
      </div>
    </div>
  );
};
export default Title;

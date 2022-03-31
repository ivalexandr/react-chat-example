import cn from "classnames";
import PropTypes from 'prop-types';
import * as icons from '../../icons';

const Icon = ({size = 20, name, className = ''}) => {
  const [width, height] = Array.isArray(size) ? size : [size, size];
  const [icon, viewBox] = icons[name];

  return (
    <svg 
    className={cn('icon', className)}
    width={width}
    height={height}
    dangerouslySetInnerHTML={{__html: icon}}
    viewBox={viewBox}
    />
  );
};
Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export { Icon };
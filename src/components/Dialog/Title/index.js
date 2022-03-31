import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Calendar from 'dayjs/plugin/calendar';
import './style.css';

dayjs.extend(Calendar);

const Title = ({ date }) => {
  return (
    <div className="title">
    {
      dayjs(date).calendar(null, {
        sameDay: "[Сегодня]",
        lastWeek: "DD MMMM",
        sameElse: "DD MMMM YYYY",
      })
    }
  </div>
  );
};

Title.propTypes = {
  date: PropTypes.string.isRequired,
}

export { Title };
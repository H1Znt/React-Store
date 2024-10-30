import './iconSwitch.css';

export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className={'icon-holder'}>
      <span className={'material-icons'} onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}
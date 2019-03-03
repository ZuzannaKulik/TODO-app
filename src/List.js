import React from 'react';

export const List = (props) => {
return <ul>{props.tasks.map(task => <li key={task}>Task number {task}</li>)}</ul>;
}
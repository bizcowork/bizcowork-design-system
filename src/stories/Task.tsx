import styled from 'styled-components';


export interface TaskProps {
  description: string;
  background: string;
  fontFamily: string;
}

const TaskStyle = styled.div`
  background: ${props => props.color};
  border: 1px solid black;
`;

export default function Task(props: TaskProps) {
  return (
    <TaskStyle color={props.background} font-family={props.fontFamily}>
      <p>
        {props.description}
        <br/>
        {props.description}
        <br />
        {props.description}
        <br />
        {props.description}
        <br/>
      </p>
    </TaskStyle>
  );
}


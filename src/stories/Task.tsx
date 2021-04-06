import styled from 'styled-components';


export interface TaskProps {
  description: string;
  background: string;
}

const TaskStyle = styled.div`
  background: ${props => props.color};
  border: 1px solid black;
`;

export default function Task(props: TaskProps) {
  return (
    <TaskStyle color={props.background}>
      <div>
        {props.description}
      </div>
    </TaskStyle>
  );
}


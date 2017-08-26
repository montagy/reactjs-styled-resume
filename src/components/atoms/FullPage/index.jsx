import styled from 'styled-components';

const FullPage = styled('div')`
  height: 100vh;
  background-image: url(${require('../../../../public/img/bg.png')});
  background-color: ${props => props.bgc || 'gray'};
  text-align: center;
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default FullPage;

import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #F4F6F9;
  height: 100vh;
  padding: 20px;
  padding-left: 7%;
  gap: 20px;
`;
export const LeftSideSection35 = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 20px;
`;
export const RightSideSection65 = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 20px;
`;
export const BorderedComtainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  background-color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
export const BorderOpeningContainer = styled(BorderedComtainer)`

`;
export const BorderFitContaienr = styled(BorderedComtainer)`
  padding: 0px;
`;
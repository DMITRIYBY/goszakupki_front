import styled from "styled-components";
import {PageContainer} from "../TenderCard/styles";

export const CatalogPage = styled(PageContainer)`
  flex-direction: column;
`
export const DocumentsCount = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const FinderByID = styled.input`
  width: 40%;
  border: 1px solid grey;
  border-radius: 5px;
  height: 40px;
  background: none;
`;
export const FindByIDButton = styled.button`
  width: 20%;
  background-color: dodgerblue;
  border-radius: 5px;
  height: 40px;
  border: none;
`;
export const ShowCount = styled.div`
  width: auto;
  display: flex;
  gap: 20px;
`;
export const LoaderTest = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
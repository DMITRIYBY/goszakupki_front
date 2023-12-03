import {FC, Fragment, useEffect, useState} from "react";
import {TenderPreiewCard} from "../../components/TenderPreviewCard/TenderPreiewCard";
import {PageContainer} from "../TenderCard/styles";
import tendersDB from './many_tenders.json'
import {CatalogPage, DocumentsCount, FindByIDButton, FinderByID, ShowCount} from "./styles";
import axios from "axios";
import { Link } from "react-router-dom";
import {TextBlack14pxRegular, TextBlack22pxRegular, TextGray14pxRegular} from "../../constants/fonts";
import {FlexRow, FlexTextRow} from "../../containers/containers";


export const Catalog: FC = () => {
    const [tenders, setTenders] = useState([]);
    const [tendersCount, setTendersCount] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [countItems, setCountItems] = useState(10);
    const [findedTenderId, setFindedTenderId] = useState('')



    useEffect(() => {
        // Определите функцию для выполнения запроса
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}client/tenders?page=${currentPage}&perPage=20`);
                setTenders(response.data); // Обновите состояние данными из ответа
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        const fetchTendersCount = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}client/tendersCount`);
                setTendersCount(response.data); // Обновите состояние данными из ответа
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        // Вызовите функцию для выполнения запроса
        fetchData();
        fetchTendersCount();

    }, [currentPage]); // Зависимость от currentPage для повторного выполнения при изменении страницы

    const fetchTenderByID = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}client/tender/${findedTenderId}`);
            setTenders(response.data); // Обновите состояние данными из ответа
            console.log(JSON.stringify(tenders))
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleClickFinder = () => {
        fetchTenderByID()
    }

    // @ts-ignore
    return (
        <Fragment>
            <CatalogPage>
                <FlexTextRow style={{alignItems: 'center', gap: '20px'}}>
                    <TextBlack22pxRegular>Результаты поиска</TextBlack22pxRegular>
                    <TextGray14pxRegular>найдено {tendersCount} тендеров</TextGray14pxRegular>
                </FlexTextRow>
                <FlexRow style={{width: '100%', justifyContent: 'flex-start'}}>
                    <FinderByID onChange={(event) => setFindedTenderId(event.target.value)} />
                    <FindByIDButton onClick={handleClickFinder}>Найти</FindByIDButton>
                </FlexRow>
                {tenders
                    .map((item, index) => (
                    // Проверка на null перед отображением TenderPreiewC
                    item !== undefined || null ? (

                        <TenderPreiewCard key={index} jsonData={item} />
                    ) : null
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Назад
                    </button>
                    <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                        Вперед
                    </button>
                </div>
                {/*<FlexRow>*/}
                {/*    <ShowCount>*/}
                {/*        <TextGray14pxRegular>Показать по</TextGray14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(10)}>10</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(20)}>20</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(30)}>30</TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular></TextBlack14pxRegular>*/}
                {/*        <TextBlack14pxRegular onClick={() => setCountItems(50)}>50</TextBlack14pxRegular>*/}
                {/*    </ShowCount>*/}
                {/*</FlexRow>*/}
            </CatalogPage>
        </Fragment>
    );
};
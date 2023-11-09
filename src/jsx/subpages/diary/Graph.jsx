import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../../../css/subpage/graph.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 90vw;
    max-width: 800px;
`;
// 최근 기록 중 10개나 20개 정도의 데이터를 받아서 default로 띄우기

const Graph = ({ setSelectedDiary, diaryData, setMethodUrl }) => {
    console.log(diaryData);

    const graphClick = (no) => {
        setMethodUrl({ method: 'get', url: '/childHealth/childNotes/' + no });
    };
    const color = ['rgb(54, 162, 235)', 'rgb(162, 54, 54)', 'rgb(235, 162, 54)'];

    let graphData = [];
    if (diaryData.childNoteDtos != null) {
        graphData = diaryData.childNoteDtos;
    }

    let childName = graphData.length > 0 && Array.isArray(graphData) ? graphData[0].cd_name : null;

    const height = [];
    const weight = [];
    const head = [];

    (graphData !== null && Array.isArray(graphData) ? graphData : []).map((idx) =>
        height.push({
            x:
                new Date(idx.reg_date).getFullYear() +
                '-' +
                (new Date(idx.reg_date).getMonth() + 1) +
                '-' +
                new Date(idx.reg_date).getDate(),
            y: idx.height,
        })
    );
    (graphData !== null && Array.isArray(graphData) ? graphData : []).map((idx) =>
        weight.push({
            x:
                new Date(idx.reg_date).getFullYear() +
                '-' +
                (new Date(idx.reg_date).getMonth() + 1) +
                '-' +
                new Date(idx.reg_date).getDate(),
            y: idx.weight,
        })
    );
    (graphData !== null && Array.isArray(graphData) ? graphData : []).map((idx) =>
        head.push({
            x:
                new Date(idx.reg_date).getFullYear() +
                '-' +
                (new Date(idx.reg_date).getMonth() + 1) +
                '-' +
                new Date(idx.reg_date).getDate(),
            y: idx.head,
        })
    );
    const data =
        graphData != null
            ? {
                  datasets: [
                      {
                          type: 'line',
                          label: childName + ' 키',
                          borderColor: color[0],
                          borderWidth: 1,
                          data: height,
                      },
                      {
                          type: 'line',
                          label: childName + ' 몸무게',
                          borderColor: color[1],
                          borderWidth: 1,
                          data: weight,
                      },
                      {
                          type: 'line',
                          label: childName + ' 머리',
                          borderColor: color[2],
                          borderWidth: 1,
                          data: head,
                      },
                  ],
              }
            : null;

    const goToWirteClick = () => {
        setMethodUrl({ method: 'get', url: '/diary/childrenInfo' });
        setSelectedDiary(1);
    };

    return (
        <div className="diary_wrap">
            <div className="diary_second_wrap">
                <div className="diary_section" style={{ width: '100%' }}>
                    <div className="diary_section_header flex" style={{ margin: '10px 0' }}>
                        <p className="yg_font" style={{ fontSize: '2rem' }}>
                            {graphData.length > 0 && Array.isArray(graphData)
                                ? '우리 ' + graphData[0].cd_name
                                : '우리 아이'}
                            성장 기록
                        </p>
                        <div className="go_to_write_health_note" style={{ margin: 'auto 0' }}>
                            <Link
                                to="/diary"
                                onClick={() => {
                                    goToWirteClick();
                                }}
                            >
                                <input type="button" value="오늘의 건강 기록 작성" className="btn btn-primary" />
                            </Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ float: 'right' }}
                        >
                            {graphData.length > 0 && Array.isArray(graphData) ? graphData[0].cd_name : '아이 선택'}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            {(diaryData.childDtos !== null && Array.isArray(diaryData.childDtos)
                                ? diaryData.childDtos
                                : []
                            ).map((idx) => (
                                <li>
                                    <button class="dropdown-item" type="button" onClick={() => graphClick(idx.no)}>
                                        {idx.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="area_for_graph_detail">
                        {graphData.length > 0 ? (
                            <Container>
                                <Line type="line" data={data} />
                            </Container>
                        ) : (
                            <div
                                className="yg_font bold"
                                style={{ width: '90vw', maxWidth: '800px', textAlign: 'center' }}
                            >
                                <span style={{ lineHeight: '250px', height: '250px' }}>
                                    아이를 선택해주시거나 건강 기록을 작성해주세요
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graph;

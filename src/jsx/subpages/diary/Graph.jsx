import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import SideMenu from '../SideMenu';
import '../../../css/subpage/graph.css';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 90vw;
    max-width: 800px;
`;
// 최근 기록 중 10개나 20개 정도의 데이터를 받아서 default로 띄우기

const data = {
    datasets: [
        {
            type: 'line',
            label: '이슬비 몸무게',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [
                { x: 'January', y: 100 },
                { x: 'February', y: 120 },
                { x: 'March', y: 50 },
                { x: 'April', y: 80 },
                { x: 'May', y: 50 },
                { x: 'June', y: 50 },
                { x: 'July', y: 50 },
                { x: 'August', y: 50 },
                { x: 'September', y: 50 },
                { x: 'October', y: 55 },
            ],
        },
        // {
        //     type: 'bar',
        //     label: 'Dataset 2',
        //     backgroundColor: 'rgb(255, 99, 132)',
        //     data: [
        //         { x: 'January', y: 1 },
        //         { x: 'February', y: 2 },
        //         { x: 'March', y: 3 },
        //         { x: 'April', y: 4 },
        //         { x: 'May', y: 5 },
        //         { x: 'June', y: 6 },
        //     ],
        //     borderColor: 'red',
        //     borderWidth: 2,
        // },
    ],
};

const Graph = ({ setSelectedSideMenu }) => {
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
        // isOn의 상태를 변경하는 메소드를 구현
        setisOn(!isOn);
    };
    return (
        <div className="diary_wrap">
            <div className="diary_second_wrap">
                <div className="diary_section">
                    <div className="diary_section_header flex">
                        <p>우리 아이 성장 기록</p>
                        <div className="go_to_write_health_note">
                            <Link
                                to="/diary"
                                onClick={() => {
                                    setSelectedSideMenu(5);
                                }}
                            >
                                <input type="button" value="오늘의 건강 기록 작성" className="btn btn-primary" />
                            </Link>
                        </div>
                    </div>
                    <div className="area_for_graph_detail">
                        <Container>
                            <Line type="line" data={data} />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graph;

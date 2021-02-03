import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styled from 'styled-components';
class Chart extends React.Component {

    constructor(props) {
        super(props);
        const { temA, temB, temC, temD, temE, dataC, dataD, dataE } = this.props.all;

        this.state = {
            chartData: {
                labels: ['Dzisiaj', 'Jutro', dataC.substring(0, 11), dataD.substring(0, 11), dataE.substring(0, 11)],
                datasets: [
                    {
                        label: 'Wartosc w °C',
                        data: [
                            temA,
                            temB,
                            temC,
                            temD,
                            temE,
                        ],
                        backgroundColor: [
                            'rgba(10,99,132,0.6)',
                            'rgba(50,99,132,0.6)',
                            'rgba(100,99,132,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,255,64,0.6)',
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displeyLegend: true,
        legendPosition: 'right',
        titleText: 'Wykres 5 dni pogody',
    }
    render() {
        return (
            <StyledChart className="chart">
                <Bar
                    data={this.state.chartData}
                    width={300}
                    height={200}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleText,
                            fontSize: 16,
                        },
                        legend: {
                            display: true,
                            position: this.props.legendPosition,
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                bottom: 20,
                                top: 20,
                            }
                        }
                    }}
                />
                <Line
                    data={this.state.chartData}
                    width={300}
                    height={200}

                    options={{

                        title: {
                            display: this.props.displayTitle,
                            text: "Wykres liniowy temeratury",
                            fontSize: 16,
                        },
                        legend: {
                            display: true,
                            position: this.props.legendPosition,
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                bottom: 20,
                                top: 20,
                            }
                        }
                    }}
                />
            </StyledChart>
        )
    }
}

export default Chart;

const StyledChart = styled.div`
    max-width: 1000px;
    margin: 40px auto 0;
`
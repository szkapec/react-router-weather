import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends React.Component {


    constructor(props) {
     
        super(props);
        console.log(props)


        
        const {temA,temB,temC,temD,temE, dataC, dataD, dataE} = this.props.all;


        this.state = {
            chartData: {
                labels: ['Dzisiaj', 'Jutro', dataC, dataD, dataE],
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
  

    render() {
        return (
            <>
            <div className="chart">
            <Bar
            data={this.state.chartData}
            width={300}
            height={200}
            options={{
                
                 title: {
                    display:true,
                     text:'Wykres 5 dni pogody',
                 },
                 legend: {
                     display: true,
                     position: 'top',
                 }
                 }}
          />
            </div>

            </>
        )
    }
}

export default Chart; 
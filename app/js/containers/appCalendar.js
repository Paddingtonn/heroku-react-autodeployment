import food from './food.js';
import React, { Component } from 'react';
console.log(food);


    class Clock extends Component {
        state = {
            date: new Date(),
        };
        render() {
            return <div>
                <h3 style={{color: "rgba(100,344,200,0.4)", marginTop:'-20px', marginRight:'-50px'}}>{this.state.date.toLocaleDateString()}</h3><h2 style={{color: "rgba(100,344,200,0.4)", marginRight:'-50px'}}>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        }
        componentDidMount() {
            this.id = setInterval(() => {
                this.setState({
                    date: new Date(),
                })
            }, 1000)
        }
        componentWillUnmount() {
            clearInterval(this.id);
        }
    }

    class CalendarCell extends Component{
        state={
            display:'none',
            position:'absolute',
            select:'',
            // foodArray: this.props.foods && this.props.foods[this.props.name]? this.props.foods[this.props.name]: [],
            grams: "gram",
        };
        slideUp = (e) => {
            this.setState({
                display:'block',
            })
        };
        slideDown = (e) => {
            this.setState({
                display:'none',
            })
        };
        handleChange = (e) => {
            e.preventDefault();
            this.setState({
                select: e.target.value,
            })
        };
        buttonClick=(e)=>{
            // const newFoodArray = this.state.foodArray.slice();
            // newFoodArray.push(this.state.select);
            // this.setState({
            //     foodArray: newFoodArray,
            // })
            const food= {name: this.state.select, grams:this.state.grams};
            this.props.addFood(this.props.name, food);
            console.log(food.name, "food.name");
        };
        handleGrams = (e) => {
            this.setState({
                grams: Number(e.target.value),
            });
            console.log('co to jest?', this.state.grams);
        };
        onFocus = () => {
            this.setState({
                grams: '',
            })
        };

        render(){
            const foodArray = this.props.foods && this.props.foods[this.props.name]? this.props.foods[this.props.name]: [];

            console.log(this.props);

            const food = this.props.item.map((i,index) => <option value={i.name} key={index}>{i.name}</option>);

            return <div style={{position:'relative', overflowY:'scroll'}} className="dynamic_div" onClick={this.slideUp} onDoubleClick={this.slideDown}><ul>{foodArray.map(el => <li>{el.name}</li>)}</ul>
                <div style={this.state}>
                    <select onChange={this.handleChange}>
                    {food}
                    </select>
                    <input style={{fontWeight:'bold'}} value={this.state.grams} onChange={this.handleGrams} type="text" onFocus={this.onFocus}/>
                    <button onClick={this.buttonClick} type="submit">EATS</button>
                </div>
            </div>
        }
    }

    class Calendar extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: {},
            }
        };
        addFood = (name,food) => {
            const newData= Object.assign({}, this.state.data);
            if(!newData[name]){
                newData[name] = [];
            }
            newData[name].push(food);
            this.setState({
                data: newData,
            })
        };

        render(){
            console.log(this.state.data, "co to?!!");

            return <table className="table">
                <tbody>
                <tr>
                    <th className="animImage" rowSpan="2"><img id="calendar-img" src="img/Romans14-law-of-clean-and-unclean-meats.jpg"/></th>
                    <th id="calendar-head" colSpan="5">Weekly <span>meal</span> calendar</th>
                    <th><Clock/></th>
                </tr>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <th>breakfast</th>
                    <td><CalendarCell item={food} addFood={this.addFood} name="mon-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="tue-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="wed-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="thu-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="fri-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sat-br" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sun-br" foods={this.state.data}/>{this.state.item}</td>
                </tr>
                <tr>
                    <th>lunch</th>
                    <td><CalendarCell item={food} addFood={this.addFood} name="mon-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="tue-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="wed-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="thu-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="fri-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sat-lu" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sun-lu" foods={this.state.data}/>{this.state.item}</td>
                </tr>
                <tr>
                    <th>dinner</th>
                    <td><CalendarCell item={food} addFood={this.addFood} name="mon-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="tue-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="wed-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="thu-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="fri-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sat-din" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sun-din" foods={this.state.data}/>{this.state.item}</td>
                </tr>
                <tr>
                    <th>snacks</th>
                    <td><CalendarCell item={food} addFood={this.addFood} name="mon-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="tue-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="wed-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="thu-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="fri-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sat-sna" foods={this.state.data}/>{this.state.item}</td>
                    <td><CalendarCell item={food} addFood={this.addFood} name="sun-sna" foods={this.state.data}/>{this.state.item}</td>
                </tr>
                <tr><th colSpan="8"></th></tr>
                </tbody>
                <SubTable clickMe={this.passComponent} item={food} foods={this.state.data}/>
            </table>
        }
    }
    class SubTable extends Component {

        // state={
        //     monday: null,
        // };
        //
        // handleClick = () => {
        //     console.log("click");
        //     const mondayItems= {breakfast: this.props.foods["mon-br"], lunch: this.props.foods["mon-lu"], dinner: this.props.foods["mon-din"], snacks: this.props.foods["mon-sna"]};
        //
        //     fetch('http://localhost:3000/meals', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(mondayItems),
        //     }).then(resp => {
        //         if (resp.ok) {
        //             return resp.json()
        //         } else {
        //             throw new Error('Error!');
        //         }
        //     }).then(data => {
        //         this.setState({
        //             monday: mondayItems,
        //         })
        //     }).catch(err => console.log('Error!!'))
        // };


        render() {

            let mon_br =0;
            let mon_lu =0;
            let mon_din =0;
            let mon_sna =0;

            let tue_br =0;
            let tue_lu =0;
            let tue_din =0;
            let tue_sna =0;

            let wed_br =0;
            let wed_lu =0;
            let wed_din =0;
            let wed_sna =0;

            let thu_br =0;
            let thu_lu =0;
            let thu_din =0;
            let thu_sna =0;

            let fri_br =0;
            let fri_lu =0;
            let fri_din =0;
            let fri_sna =0;

            let sat_br =0;
            let sat_lu =0;
            let sat_din =0;
            let sat_sna =0;

            let sun_br =0;
            let sun_lu =0;
            let sun_din =0;
            let sun_sna =0;

            // if(this.props.foods["mon-br"]) {
            //     this.props.foods["mon-br"].forEach(el => {
            //         this.props.item.forEach(i => {
            //             if (el.name === i.name) {
            //                 mon_br += (el.grams/100) * i.kcal;
            //                 console.log(mon_br);
            //             }if(isNaN(el.grams)){
            //                 mon_br = 0;
            //             }
            //         });
            //     });
            // }
            // if(this.props.foods["mon-lu"]) {
            //     this.props.foods["mon-lu"].forEach(el => {
            //         this.props.item.forEach(i => {
            //             if (el.name === i.name){
            //                 mon_lu += (el.grams/100) * i.kcal;
            //                 console.log(mon_lu);
            //             }if(isNaN(el.grams)){
            //                 mon_lu = 0;
            //             }
            //         })
            //     })
            // }
            // if(this.props.foods["mon-din"]){
            //     this.props.foods["mon-din"].forEach(el => {
            //         this.props.item.forEach(i => {
            //             if (el.name === i.name){
            //                 mon_din += (el.grams/100) * i.kcal;
            //             }if(isNaN(el.grams)){
            //                 mon_din = 0;
            //             }
            //         })
            //     })
            // }
            // if(this.props.foods["mon-sna"]){
            //     this.props.foods["mon-sna"].forEach(el => {
            //         this.props.item.forEach(i => {
            //             if (el.name === i.name){
            //                 mon_sna += (el.grams/100) * i.kcal;
            //             }if(isNaN(el.grams)){
            //                 mon_sna = 0;
            //             }
            //         })
            //     })
            // }
            /////////////////////////////////////////////
            const kcalCalc = (data, variable) => {
                    if (this.props.foods[data]) {
                        this.props.foods[data].forEach(el => {
                        this.props.item.forEach(i => {
                            if (el.name === i.name) {
                                variable += (el.grams / 100) * i.kcal;
                            }if (isNaN(el.grams)) {
                                variable = 0;
                                console.log(variable);
                            }
                        });
                    })
                }
                return variable;
            };

            const sumKcalMon = (Number(kcalCalc("mon-br", mon_br)) + Number(kcalCalc("mon-lu", mon_lu)) + Number(kcalCalc("mon-din", mon_din)) + Number(kcalCalc("mon-sna", mon_sna))).toFixed(2);

            const sumKcalTue = (Number(kcalCalc("tue-br", tue_br)) + Number(kcalCalc("tue-lu", tue_lu)) + Number(kcalCalc("tue-din", tue_din)) + Number(kcalCalc("tue-sna", tue_sna))).toFixed(2);

            const sumKcalWed = (Number(kcalCalc("wed-br", wed_br)) + Number(kcalCalc("wed-lu", wed_lu)) + Number(kcalCalc("wed-din", wed_din)) + Number(kcalCalc("wed-sna", wed_sna))).toFixed(2);

            const sumKcalThu = (Number(kcalCalc("thu-br", thu_br)) + Number(kcalCalc("thu-lu", thu_lu)) + Number(kcalCalc("thu-din", thu_din)) + Number(kcalCalc("thu-sna", thu_sna))).toFixed(2);

            const sumKcalFri = (Number(kcalCalc("fri-br", fri_br)) + Number(kcalCalc("fri-lu", fri_lu)) + Number(kcalCalc("fri-din", fri_din)) + Number(kcalCalc("fri-sna", fri_sna))).toFixed(2);

            const sumKcalSat = (Number(kcalCalc("sat-br", sat_br)) + Number(kcalCalc("sat-lu", sat_lu)) + Number(kcalCalc("sat-din", sat_din)) + Number(kcalCalc("sat-sna", sat_sna))).toFixed(2);

            const sumKcalSun = (Number(kcalCalc("sun-br", sun_br)) + Number(kcalCalc("sun-lu", sun_lu)) + Number(kcalCalc("sun-din", sun_din)) + Number(kcalCalc("sun-sna", sun_sna))).toFixed(2);

            return <tfoot className="subTable">
            <tr>
                <th>approx. kcal intake</th>
                <td>{sumKcalMon} kcal</td>
                <td>{sumKcalTue} kcal</td>
                <td>{sumKcalWed} kcal</td>
                <td>{sumKcalThu} kcal</td>
                <td>{sumKcalFri} kcal</td>
                <td>{sumKcalSat} kcal</td>
                <td>{sumKcalSun} kcal</td>
            </tr>
            {/*<button onClick={this.handleClick}>"CLICK!!</button>*/}
            </tfoot>
        }
    }

    class AppCalendar extends Component{

        render(){
            return <div className="main-table">
                <p style={{fontSize:'30px', marginTop:'-90px', marginLeft:'1000px', position:'absolute'}}>Hello {this.props.match ? this.props.match.params.user : ''} !</p>
                <Calendar/>
            </div>
        }
    }

export default AppCalendar;
import React from 'react'
import ReactDOM from 'react-dom'
//npm install enzyme-to-json --save-dev
import { shallow } from 'enzyme' //this enables the renders empty test
//npm install enzyme-to-json --save-dev
import toJson from 'enzyme-to-json' //this enable json file for snap shot
import Accordion from './Accordion'

const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

describe(`Accordion Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
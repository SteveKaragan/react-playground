import React from 'react'
import ReactDOM from 'react-dom'
//npm install enzyme-to-json --save-dev
import { shallow } from 'enzyme' //this enables the renders empty test
//npm install enzyme-to-json --save-dev
import toJson from 'enzyme-to-json' //this enable json file for snap shot
import Tabs from './Tabs'

describe(`Tabs Component`, () => {
    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
//this test requires Enzyme
  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
//this test simulates pushing the second button  
  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})






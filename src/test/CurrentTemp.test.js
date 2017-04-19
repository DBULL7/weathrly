describe("currentTemp Test", () => {

  it("should have a length of one",() => {

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.length,1)
  })


  it("should render a div",() => {

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.type,"div")
  })

  it("should have props passed into it", () =>{

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.props.className,'current-location-container')

  })

})

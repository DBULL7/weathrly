describe('Header test', () => {

  it("should contain children elements", () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.length, 1)
  })

  it("should make a header element", () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.node.type, "header")
  })

  it("should have a property that is a method of the app",() => {
    const wrapper = shallow(<Header/>).find("button")
    expect(typeof wrapper.node.props.onClick, typeof function(){})
  })

  it("should have innerHTML of enter", () => {
    const wrapper = shallow(<Header/>).find("button")
    expect(wrapper.node.children, "Enter")

  })

  it("should have a enter button that can be clicked", () => {
    var mockFn  = jest.fn()
    const wrapper = shallow(<Header sendLocation={mockFn}/> )
    var button =  wrapper.find(".enterBtn")

    button.props.onClick = {mockFn}
    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it("should have a find location button that can be clicked", () => {
    var mockFn  = jest.fn()

    const wrapper = shallow(<Header findLocation={mockFn}/> )
    var button = wrapper.find(".locationBtn")

    button.props.onClick ={mockFn}
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe("Button test" , () => {

  it("should render a button element", () => {
    const wrapper = shallow(<Header/>).find("button")
    expect(wrapper.node.type,"button" )
  })

  it("should have a length of one", () => {
    const wrapper = shallow(<Header/>).find("button")

    expect(wrapper.node.length,1 )
  })
})

describe("Input test", () => {

  it("should have a length of one", () => {
    const wrapper = shallow(<Header/>).find("input")
    expect(wrapper.node.length,1)
  })

  it("should render a input field", () => {
    const wrapper = shallow(<Header/>).find("input");
    expect(wrapper.node.type,"input");
  })


  it("should have 2 props that are methods", () => {
    const wrapper = shallow(<Header/>).find("input");
    expect(typeof wrapper.node.props.onKeyPress, typeof Function)
    expect(typeof wrapper.node.props.onChange, typeof Function)
  })

  it("should be able to take user input",()=>{
    var mockFn = jest.fn()
    const wrapper = shallow(<Header updateLocation={mockFn}/>).find("input")

    wrapper.simulate("change",{target:{value:"CHEWIE"}})
    expect(wrapper.props.value,"CHEWIE")
  })

})

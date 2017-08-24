class HelloWorldController < ApplicationController
  include ReactOnRails::Controller

  def index
    @hello_world_props = { "name": "Stranger" }
    redux_store("helloWorldStore", props: @hello_world_props)
  end
end

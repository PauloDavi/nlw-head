defmodule MicroserviceWeb.MessagesView do
  use MicroserviceWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created",
      message: message
    }
  end
end

defmodule MicroserviceWeb.MessagesController do
  use MicroserviceWeb, :controller

  alias Microservice.Message
  alias Microservice.Messages.Create

  def create(conn, params) do
    params
    |> Create.call()
    |> handle_create(conn)
  end

  defp handle_create({:ok, %Message{} = message}, conn) do
    conn
    |> put_status(:created)
    |> render("create.json", message: message)
  end

  defp handle_create({:error, %{result: result, status: status} = error}, conn) do
    conn
    |> put_status(status)
    |> put_view(MicroserviceWeb.ErrorView)
    |> render("error.json", result: result)
  end
end

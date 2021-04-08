class DeckboxesController < ApplicationController
  before_action :set_deckbox, only: [:show, :update, :destroy]

  # GET /deckboxes
  def index
    @deckboxes = Deckbox.all

    render json: @deckboxes
  end

  # GET /deckboxes/1
  def show
    render json: @deckbox
  end

  # POST /deckboxes
  def create
    @deckbox = Deckbox.new(deckbox_params)

    if @deckbox.save
      render json: @deckbox, status: :created, location: @deckbox
    else
      render json: @deckbox.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /deckboxes/1
  def update
    if @deckbox.update(deckbox_params)
      render json: @deckbox
    else
      render json: @deckbox.errors, status: :unprocessable_entity
    end
  end

  # DELETE /deckboxes/1
  def destroy
    @deckbox.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deckbox
      @deckbox = Deckbox.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def deckbox_params
      params.require(:deckbox).permit(:card_name, :quantity, :index, :image, :deck_name)
    end
end

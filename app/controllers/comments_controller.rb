class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all.order("created_at DESC")

    render json: @comments
  end

  #GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    # @post = Post.find(params[:id])
    
    
    @comment = Comment.new(comment_params)
   
    @comment.user = @current_user
    #@comment.post = @set_post
    # @post = Post.find(params[:post_id])
    

   # @comment.post = @post
    #@post.user = @current_user
    #@post.comment.push(@comment)

    if @comment.save
      render json: @comment 
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end
    
    def post_params
      params.require(:post).permit(:title, :author, :content, :user_id)
    end
    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:author, :content, :user_id, :post_id)
    end
end

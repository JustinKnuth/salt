# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.destroy_all
Post.destroy_all
User.destroy_all

@user = User.create!(username: 'finroo', password: 'lebron23')

puts "#{User.count} users created"

@post1 = Post.create!(title: 'poops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post2 = Post.create!(title: 'ebqgdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post3 = Post.create!(title: 'fwdnfdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post4 = Post.create!(title: 'poossssps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post5 = Post.create!(title: 'poddddops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post6 = Post.create!(title: 'poops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post7 = Post.create!(title: 'ebqgdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post8 = Post.create!(title: 'fwdnfdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post9 = Post.create!(title: 'poossssps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post10 = Post.create!(title: 'poddddops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post11 = Post.create!(title: 'poops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post12 = Post.create!(title: 'ebqgdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post13 = Post.create!(title: 'fwdnfdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post14 = Post.create!(title: 'poossssps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post15 = Post.create!(title: 'poddddops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post16 = Post.create!(title: 'poops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post17 = Post.create!(title: 'ebqgdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post18 = Post.create!(title: 'fwdnfdps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post19 = Post.create!(title: 'poossssps', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)
@post20 = Post.create!(title: 'poddddops', author: 'finroo', content: 'this is a post this is a post this is a post', user: @user)

puts "#{Post.count} posts created"


Comment.create!(author: 'finroo', content: 'this is a comment is a comment', user:@user, post: @post1)

puts "#{Comment.count} comments created"

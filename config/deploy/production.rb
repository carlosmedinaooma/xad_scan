# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.


set :password, ask('Server password:', nil)
server "fg-dev2-test3",   user: "railsuser", port: 22, password: fetch(:password), roles: %w{web app db}
set :deploy_to, "/var/www/html/staging/xad_scanner"

set      :eager_load , false

# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server definition into the
# server list. The second argument is a, or duck-types, Hash and is
# used to set extended properties on the server.




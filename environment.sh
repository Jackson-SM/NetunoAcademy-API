red_color='\033[0;31m'
green_color='\033[0;32m'
blue_color='\033[0;34m'
purple_color='\033[0;35m'
cyan_color='\033[0;36m'
yellow_color='\033[0;31m'
reset_color='\033[0m'

echo -n -e "${red_color}Database URL: ${reset_color}"
read database_url

echo -n -e "${blue_color}Cloudinary Name: ${reset_color}"
read cloudinary_name

echo -n -e "${purple_color}Cloudinary API Key: ${reset_color}"
read cloudinary_api_key

echo -n -e "${yellow_color}Cloudinary API Secret: ${reset_color}"
read cloudinary_api_secret

echo -n -e "${cyan_color}JWT Secret: ${reset_color}"
read jwt_secret

touch ./.env
cat << EOF > ./.env
DATABASE_URL="${database_url}"
API_CLOUDINARY_NAME="${cloudinary_name}"
API_CLOUDINARY_API_KEY="${cloudinary_api_key}"
API_CLOUDINARY_API_SECRET="${cloudinary_api_secret}"
SECRET_KEY_JWT="${jwt_secret}"
EOF

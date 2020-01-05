cd ~/lapora.net/beacon-food-forest/scripts/
echo "============ Fetching new code from git =============="
git fetch
git rebase
echo "============ Applying virtual environment =============="
source /home/foodforest/lapora.net/ff/bin/activate
cd /home/foodforest/lapora.net/beacon-food-forest
echo "============ Installing new requirements =============="
pip install --upgrade pip
pip install -r requirements.txt
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Restarting Passenger ================="
touch ~/lapora.net/tmp/restart.txt
echo "============ Finished Deployment =============="

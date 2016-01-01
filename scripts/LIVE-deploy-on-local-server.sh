cd ~/django-projects/beacon-food-forest-main/
echo "============ Fetching new code from git =============="
git fetch
git rebase
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Finished Deployment =============="
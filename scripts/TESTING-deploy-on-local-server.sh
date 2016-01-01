cd ~/django-projects/test/beacon-food-forest-main/
echo "============ Fetching new code from git =============="
git fetch
echo "Checking out branch $1 to test.beaconfoodforest.org"
git checkout $1
git rebase
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Finished Deployment =============="
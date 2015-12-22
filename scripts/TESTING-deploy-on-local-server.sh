cd ~/django-projects/test/beacon-food-forest-main/
echo "============ Fetching new code from git =============="
git fetch
git rebase
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Finished Deployment =============="
cd ~/django-projects/test/beacon-food-forest-main/
echo "============ Stashing local changes =============="
git stash
echo "============ Fetching new code from git =============="
git fetch
echo "Checking out branch $1 to test.beaconfoodforest.org"
git checkout $1
git rebase
echo "============ Applying virtual environment =============="
export WORKON_HOME=$HOME/.python-environments
export PROJECT_HOME=$HOME/django-projects
export VIRTUALENVWRAPPER_PYTHON='/home3/beaconf2/python3.5/bin/python3.5'
source /home3/beaconf2/bin/virtualenvwrapper.sh
workon bff-py3.5
cd ~/django-projects/test/beacon-food-forest-main/
echo "============ UN-Stashing local changes =============="
git stash pop
echo "============ Installing new requirements =============="
pip install -r requirements.txt
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Finished Deployment =============="
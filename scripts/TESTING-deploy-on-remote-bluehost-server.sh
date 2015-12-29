echo "===================================================="
echo "     Make sure you are on the branch you want"
echo "   to deploy to test.beaconfoodforest.org when"
echo "             running this script."
echo "===================================================="
CURRENT_BRANCH=`git symbolic-ref --short -q HEAD`
git push origin $CURRENT_BRANCH
ssh beaconf2@beaconfoodforest.org "~/django-projects/test/beacon-food-forest-main/scripts/TESTING-deploy-on-local-server.sh $CURRENT_BRANCH"

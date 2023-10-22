#include <bits/stdc++.h>
using namespace std;
int n;
struct Job {
    int start;
    int end;
};

vector<Job> docfile(const char* filename) {
    FILE *f = fopen(filename,"rt");
    
    if (f == NULL) {
        cerr << "Khong the mo file." << endl;
        exit(1);
    }
    vector<Job> jobs(n);
	fscanf(f,"%d\n",&n);
    for(int i=0;i<n;i++){
		int x,y;
		fscanf(f,"%d%d",&x,&y);
		jobs.push_back({x,y});
	}
    return jobs;
}
bool compareJobs(const Job& a, const Job& b) {
    return a.end > b.end;
}
//int check(vector<Job>& jobs)
//{
//	int count = 1;
//	Job job_pre = jobs[0];
//	for(int i=1;i<jobs.size();i++)
//	{
//		if(jobs[i].start >= job_pre.end)
//		{
//			count++;
//			job_pre = jobs[i];
//			cout << job_pre.start << " " <<job_pre.end << endl;
//		} 
//	}
//	return count;  
//}
vector<Job> check(vector<Job>& jobs)
{
	int count = 1;
	vector<Job> list;
	list.push_back(jobs[0]);
	for(int i=1;i<jobs.size();i++)
	{
		//kiem trong danh sach them vao 
		if(jobs[i].start >= list[list.size()-1].end || jobs[i].end <= list[list.size()-1].start)
		{
			list.push_back(jobs[i]);
		}
	}
	return list;  
}
int main(){
	/*
	line1.txt	->	4
	line2.txt	->	5
	line3.txt	->	3
	line4.txt	->	4
	*/
	vector<Job> jobs = docfile("test.txt");
	sort(jobs.begin(), jobs.end(), compareJobs);
	vector<Job> result = check(jobs);
//	for(int i=0;i<result.size();i++)
//		cout << result[i].start << " " << result[i].end << endl;
	cout << "Result: " << result.size() << endl;
	return 0;
	return 0;
}


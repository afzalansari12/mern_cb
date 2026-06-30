#include<iostream>
using namespace std;
class person{
    public :
    string name;
    int age;
    person(string n,int a){
        name =n;
        age = a;
    }
    void print(){
        cout << this->name << " , " << this->age << endl;
    }
};

int main(){

    person p("kartik",15);
    person p1("yash",25);

    p.print();
    p1.print();


}
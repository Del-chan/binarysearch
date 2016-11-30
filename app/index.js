  Array.prototype._generateArray  = function(){
    var arr = [];
    for( var i = this.start; i<= this.limit;){
      arr.push(i);
      i += this.step;
    }
    return arr;
  }
  
  Array.prototype.toTwenty = function(){
    this.step = 1;
    this.start = 1;
    this.limit = 20;
    return this._generateArray();
  };

  Array.prototype.toForty = function(){
    this.step = 2;
    this.start = 2;
    this.limit = 40;
    return this._generateArray();
  };
  
  Array.prototype.toOneThousand = function(){
    this.step = 10;
    this.start = 10;
    this.limit = 1000;
    return this._generateArray();
  };
  
Array.prototype.search = function(term) {
    var result = {}
    result.count = 0;
    result.length = this.length;
    var start = 0;
    var end = this.length - 1;
    
    while(start <= end){
      var middle = Math.floor((start + end) / 2);
      if(this[start] === term){
        result.index = start;
        return result;
      }
      else {
        start = start + 1;
      }
      if(this[end] === term) { 
        result.index = end
        return result;
      }
      else {
        end = end -1;
      }
      if(this[middle] === term) { 
        result.index = middle;
        return result;
      }
      else if(this[middle] < term ) start = middle + 1;
      else if(this[middle] > term ) end = middle - 1;
      result.count++;
    }
    result.index = -1;
    return result;
  }
  
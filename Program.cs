using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using Yahoo.Yui.Compressor;

namespace IncidentReportResourceCompressor
{
    class Program
    {
        static void Main(string[] args)
        {

            DirSearch("C:\\Users\\arahaman\\Desktop\\css");
            Console.ReadKey();

        }

        static void compressFile(string f)
        {
            try
            {
                var thefile = File.ReadAllText(f);

                if (Path.GetExtension(f) == ".js")
                {
                    var jsCompressor = new JavaScriptCompressor();
                    var mini = jsCompressor.Compress(thefile);
                    if (mini.ToString() != null)
                        File.WriteAllText(f, mini.ToString());
                }
                else if (Path.GetExtension(f) == ".css")
                {
                    var cssCompressor = new CssCompressor();
                    var mini = cssCompressor.Compress(thefile);
                    if (mini.ToString() != null)
                        File.WriteAllText(f, mini.ToString());
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }
            

        }

        static void DirSearch(string sDir)
        {
            try
            {
                if (Directory.GetDirectories(sDir, "*.*", SearchOption.AllDirectories).Length > 0)
                {
                    foreach (string d in Directory.GetDirectories(sDir,"*.*",SearchOption.AllDirectories ))
                    {
                        foreach (string f in Directory.GetFiles(d))
                        {

                            compressFile(f);
                            Console.WriteLine(f);
                        }
                        //DirSearch(d);
                    }



                }
                //else
                //{
                    foreach (string f in Directory.GetFiles(sDir))
                    {
                        compressFile(f);
                        Console.WriteLine(f);
                    }
                //}

            }
            catch (System.Exception excpt)
            {
                Console.WriteLine(excpt.Message);
            }
        }
    }
}
